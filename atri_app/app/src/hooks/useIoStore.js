import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "temp": {},
  "showcase": {}
}});

export default useIoStore;
