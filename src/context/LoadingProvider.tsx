import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
    setLoading: () => {},
  };

  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.body.style.backgroundColor = "#0c0c0c";
    const main = document.getElementsByTagName("main")[0];
    if (main) main.classList.add("main-active");

    const timer = setTimeout(() => {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) module.initialFX();
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      <main className="main-body main-active">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
