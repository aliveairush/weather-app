import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /** Method to save data in local storage */
  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Get data from storage by key
   */
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Remove data in storage by key
   */
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clear all local storage
   */
  public clearStorage(): void {
    localStorage.clear();
  }
}
