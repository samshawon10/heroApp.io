import { useEffect, useState } from "react";

const STORAGE_KEY = "hero-io-installed";

const readStored = () => {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Failed to read installations", error);
    return [];
  }
};

export const useInstallations = () => {
  const [installed, setInstalled] = useState(() => readStored());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(installed));
    } catch (error) {
      console.error("Failed to persist installations", error);
    }
  }, [installed]);

  const install = (app) => {
    setInstalled((prev) => {
      const exists = prev.some((item) => item.id === app.id);
      if (exists) return prev;
      return [...prev, app];
    });
  };

  const uninstall = (id) => {
    setInstalled((prev) => prev.filter((item) => item.id !== id));
  };

  const isInstalled = (id) => installed.some((item) => item.id === id);

  return { installed, install, uninstall, isInstalled };
};
