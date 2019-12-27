import { useEffect } from "react";
import { toast } from "react-toastify";

const notify = () => {
  console.log("trying to notify");
  toast.error("Sorry, we failed to confirm your RSVP. Please try again.", {
    position: toast.POSITION.BOTTOM_CENTER,
    className: "error_toast",
  });
};

const requestAndNotify = async form => {
  const response = await fetch("/api/rsvp", {
    method: "post",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 204) {
    notify();
  }
};

export const usePostRsvp = form => {
  useEffect(() => {
    requestAndNotify(form);
  }, [form]);
};
