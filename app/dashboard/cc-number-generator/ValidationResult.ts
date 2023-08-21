interface IValidationResult {
  form: any;
  setResults: any;
  statusTrue: any;
  statusFalse: any;
  dateTrueFalse: any;
  dateFalseTrue: any;
  dateNotRandom: any;
  dateRandom: any;
  month: any;
  year: any;
  monthRandom: any;
  yearRandom: any;
  cvvGenerator: any;
  binValidator: any;
  falseAndTrue: any;
  trueAndFalse: any;
}

export const ValidationResult = ({
  form,
  setResults,
  statusTrue,
  statusFalse,
  dateTrueFalse,
  dateFalseTrue,
  dateNotRandom,
  dateRandom,
  month,
  year,
  monthRandom,
  yearRandom,
  cvvGenerator,
  binValidator,
  falseAndTrue,
  trueAndFalse,
}: IValidationResult) => {
  let i = 0;

  // show bin, cvv not random
  if (falseAndTrue && form.cvv !== 0) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.cvv}`,
      ]);
      i++;
    }
  }
  // show bin, cvv random
  if (falseAndTrue && form.cvv === 0) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${cvvGenerator()}`,
      ]);
      i++;
    }
  }
  // show bin, cvv = blank dan month = random, year not random
  if (statusTrue && form.cvv === 0 && dateTrueFalse) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${
          form.year
        }|${cvvGenerator()}`,
      ]);
      i++;
    }
  }
  // show bin, cvv = blank, month not random, year random
  if (statusTrue && form.cvv === 0 && dateFalseTrue) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${yearRandom(
          year,
        )}|${cvvGenerator()}`,
      ]);
      i++;
    }
  }
  // show bin, cvv = blank, month not random, year not random
  if (statusTrue && form.cvv === 0 && dateNotRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${
          form.year
        }|${cvvGenerator()}`,
      ]);
      i++;
    }
  }
  // show bin, cvv = blank, month random, year random
  if (statusTrue && form.cvv === 0 && dateRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(
          year,
        )}|${cvvGenerator()}`,
      ]);
      i++;
    }
  }
  // show bin, cvv not random, month random, year random
  if (statusTrue && form.cvv !== 0 && dateRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(year)}|${
          form.cvv
        }`,
      ]);
      i++;
    }
  }
  // show bin, cvv not random, month not random, year not random
  if (statusTrue && form.cvv !== 0 && dateNotRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${form.year}|${form.cvv}`,
      ]);
      i++;
    }
  }
  // show bin, cvv not random, month not random, year random
  if (statusTrue && form.cvv !== 0 && dateFalseTrue) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${yearRandom(year)}|${
          form.cvv
        }`,
      ]);
      i++;
    }
  }
  // show bin, cvv not random, month random, year not random
  if (statusTrue && form.cvv !== 0 && dateTrueFalse) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${form.year}|${
          form.cvv
        }`,
      ]);
      i++;
    }
  }

  // show bin, month random, year not random
  if (trueAndFalse && dateTrueFalse) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${form.year}`,
      ]);
      i++;
    }
  }
  // show bin, month not random, year random
  if (trueAndFalse && dateFalseTrue) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${yearRandom(year)}`,
      ]);
      i++;
    }
  }
  // show bin, month random, year random
  if (trueAndFalse && dateRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${monthRandom(month)}|${yearRandom(year)}`,
      ]);
      i++;
    }
  }
  // show bin, month not random, year not random
  if (trueAndFalse && dateNotRandom) {
    while (i < form.quantity) {
      setResults((results: any) => [
        ...results,
        `${binValidator(form.bin)}|${form.month}|${form.year}`,
      ]);
      i++;
    }
  }
  if (statusFalse) {
    while (i < form.quantity) {
      setResults((results: any) => [...results, binValidator(form.bin)]);
      i++;
    }
  }
};
