/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const closeForChar = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const closeForLastPushedChar = () => {
    const lastChar = stack[stack.length - 1];
    return closeForChar[lastChar];
  };

  let valid = Array.from(s).every((c) => {
    if ("({[".includes(c)) {
      stack.push(c);
      return true;
    }

    if (")}]".includes(c)) {
      if (!stack.length || closeForLastPushedChar() !== c) {
        return false;
      }

      stack.pop();
      return true;
    }
  });

  if (stack.length) {
    valid = false;
  }

  return valid;
};
