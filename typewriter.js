const sentence = "hello there from lighthouse labs";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time); // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50
}


/* 
'h' => 0 ms
'e' => 50 ms
'l' => 100 ms
'l' => 150 ms
'o' => 200 ms
' ' => 250 ms
't' => 300 ms
'h' => 350 ms
'e' => 400 ms
'r' => 450 ms
'e' => 500 ms
...
(you get the idea) */