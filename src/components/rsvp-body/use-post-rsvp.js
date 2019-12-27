import { useEffect } from "react";

export const usePostRsvp = form => {
  useEffect(() => {
    fetch("/api/rsvp", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [form]);
};
