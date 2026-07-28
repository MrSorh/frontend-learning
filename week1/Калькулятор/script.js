// Состояние калькулятора
let currentNumber = '0'
let previousNumber = ''
let operator = null
let shouldResetDisplay = false

// Элементы на странице
const resultDisplay = document.getElementById('result')
const expressionDisplay = document.getElementById('expression')

// Обновить дисплей
function updateDisplay() {
  resultDisplay.textContent = currentNumber
}

// Нажата цифра
function handleNumber(num) {
  if (shouldResetDisplay) {
    currentNumber = num === '.' ? '0.' : num
    shouldResetDisplay = false
    return
  }

  if (num === '.') {
    if (currentNumber.includes('.')) return
    currentNumber += '.'
    return
  }

  if (currentNumber === '0' && num !== '.') {
    currentNumber = num
  } else {
    if (currentNumber.length >= 12) return
    currentNumber += num
  }

  updateDisplay()
}

// Нажата операция
function handleOperator(op) {
  if (operator && !shouldResetDisplay) {
    calculate()
  }

  previousNumber = currentNumber
  operator = op
  shouldResetDisplay = true
  expressionDisplay.textContent = `${previousNumber} ${op}`
}

// Посчитать результат
function calculate() {
  if (!operator || !previousNumber) return

  const prev = parseFloat(previousNumber)
  const curr = parseFloat(currentNumber)
  let result

  if (operator === '/' && curr === 0) {
    currentNumber = 'Ошибка'
    operator = null
    previousNumber = ''
    updateDisplay()
    expressionDisplay.textContent = ''
    return
  }

  switch (operator) {
    case '+': result = prev + curr; break
    case '-': result = prev - curr; break
    case '*': result = prev * curr; break
    case '/': result = prev / curr; break
  }

  currentNumber = String(parseFloat(result.toFixed(10)))
  operator = null
  previousNumber = ''
  shouldResetDisplay = true
  expressionDisplay.textContent = ''
  updateDisplay()
}

// Очистить всё
function clearAll() {
  currentNumber = '0'
  previousNumber = ''
  operator = null
  shouldResetDisplay = false
  expressionDisplay.textContent = ''
  updateDisplay()
}

// Смена знака +/-
function toggleSign() {
  if (currentNumber === '0' || currentNumber === 'Ошибка') return
  currentNumber = currentNumber.startsWith('-')
    ? currentNumber.slice(1)
    : '-' + currentNumber
  updateDisplay()
}

// Процент
function handlePercent() {
  currentNumber = String(parseFloat(currentNumber) / 100)
  updateDisplay()
}

// Обработчики кнопок
document.querySelectorAll('.btn-num').forEach(btn => {
  btn.addEventListener('click', () => handleNumber(btn.dataset.num))
})

document.querySelectorAll('.btn-action').forEach(btn => {
  btn.addEventListener('click', () => handleOperator(btn.dataset.op))
})

document.getElementById('equals').addEventListener('click', calculate)
document.getElementById('clear').addEventListener('click', clearAll)

document.querySelectorAll('.btn-op').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.op === '+/-') toggleSign()
    if (btn.dataset.op === '%') handlePercent()
  })
})