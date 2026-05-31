async function runCode(code) {
  // У Glot.io другой путь и формат JSON
  const response = await fetch('https://glot.io/run/python', {
    method: 'POST',
    body: JSON.stringify({
      files: [{
        name: 'main.py',
        content: code
      }]
    }),
    headers: { 
      'Content-Type': 'application/json'
    }
  });
  
  const result = await response.json();
  
  // У Glot.io результат лежит в поле 'stdout'
  console.log("Результат работы программы:", result.stdout);
}

runCode('print("Hello from CodeNexus via Glot.io!")');
