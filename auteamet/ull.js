    const opt = { maxlen: 0 };  // 0 is a falsy value
    const max = Math.max(3, opt.maxlen || 7);
    // max will be 7, because opt.maxlen is 0 (falsy), so 7 is used instead.
    