fun solvePuzzle(): String {
  return ""
}


val INPUT = """ """.trimIndent();
val CORRECT_ANSWER = "";

fun main() {
  val startTime = System.currentTimeMillis();

  val answer = solvePuzzle()

  println("--- Puzzle result ---");
  println(answer)
  println(if (answer === CORRECT_ANSWER) "Test success" else "Test fail")

  val runTime = System.currentTimeMillis() - startTime
  println("Run time: ${runTime} ms")
  println("---------------------")
}