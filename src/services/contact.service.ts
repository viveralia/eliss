export const sendEmail = async (payload: unknown) => {
  const path = `http://formspree.io/f/${process.env.NEXT_FORMSPREE_ID}`;

  return await fetch(path, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
