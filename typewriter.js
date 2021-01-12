const sentence = "hello there from lighthouse labs\n";
let boxOfTime = 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, boxOfTime += 500)
}
