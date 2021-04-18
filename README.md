# RPN Calculator

An implementation of an RPN calculator, loosely modelled after the classic
[Hewlett Packard HP-35](https://en.wikipedia.org/wiki/HP-35) scientific pocket
calculator that was introduced in 1972.

> RPN stands for [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
>
> From WikiPedia:
>
> _In reverse Polish notation, the operators follow their operands; for instance, to add 3 and 4 together, one would write 3 4 + rather than 3 + 4. If there are multiple operations, operators are given immediately after their second operands; so the expression written 3 − 4 + 5 in conventional notation would be written 3 4 − 5 + in reverse Polish notation: 4 is first subtracted from 3, then 5 is added to it. An advantage of reverse Polish notation is that it removes the need for parentheses that are required by infix notation. While 3 − 4 × 5 can also be written 3 − (4 × 5), that means something quite different from (3 − 4) × 5. In reverse Polish notation, the former could be written 3 4 5 × −, which unambiguously means 3 (4 5 ×) − which reduces to 3 20 − (which can further be reduced to -17); the latter could be written 3 4 − 5 × (or 5 3 4 − ×, if keeping similar formatting), which unambiguously means (3 4 −) 5 ×._

The calculator uses a "stack" with four "registers", named _x_, _y_, _z_ and _t_. Operations that take one operand operate on register _x_, replacing the value of _x_. Those that take two operand operate on registers _x_ and _y_, replacing the value of _x_ while shifting down the stack one position.

The <kbd>Enter</kbd> key pushes the current value of the _x_ into the _y_ register while shifting the rest of the stack up one position. The value of the _t_ register is lost.

For example, to add 1 and 2, press these keys: <kbd>1</kbd> <kbd>ENTER</kbd> <kbd>2</kbd> <kbd>+</kbd>

The original HP-35 instruction manual (PDF) can be found [here](http://www.cs.columbia.edu/~sedwards/hp35colr.pdf).
