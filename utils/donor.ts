export const postDonor = (values: any) => {
  return fetch("/api/donor", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
