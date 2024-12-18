export const getMinMonthDate = (min) => {
  const today = new Date()
    .toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    })
    .split(",")[0];
  const [day, month, year] = today.split("/");

  return `${year}${Number(month) - min}${day}`;
};
