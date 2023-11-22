export default function formatDate(date: number | string) {
  const dateInMillis = new Date(date).getTime();

  try {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(dateInMillis);
  } catch (error) {
    return "";
  }
}
