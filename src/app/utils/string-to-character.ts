export default function stringToCharacter(value: string) {
  const chars: string[] = [];

  for (let i = 0; i < value.length; i++) {
    chars.push(value[i]);
  }

  return chars;
}
