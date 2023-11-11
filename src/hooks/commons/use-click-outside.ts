import { MutableRefObject, useCallback, useEffect } from "react";

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  onClickOutside: () => void,
) {
  const handleClickOutside = useCallback(
    (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, handleClickOutside]);
}
