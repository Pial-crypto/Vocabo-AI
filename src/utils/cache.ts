// src/utils/cache.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export const cache = {
  async set<T>(key: string, data: T): Promise<void> {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    await AsyncStorage.setItem(key, JSON.stringify(entry));
  },

  async get<T>(key: string): Promise<T | null> {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return null;

    const entry: CacheEntry<T> = JSON.parse(raw);
    const isExpired = Date.now() - entry.timestamp > CACHE_EXPIRY_MS;

    return isExpired ? null : entry.data;
  },

  async clear(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  },
};