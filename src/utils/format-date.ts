export default function formatDate(value: number | Date) {
  try {
    return Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(value);
  } catch (error) {
    return "";
  }
}
