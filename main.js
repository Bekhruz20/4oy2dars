let text=prompt('String turidagi malumot kiriting:')
let num=+prompt('Number turidagi malumot kiriting:')
let boolean=prompt('Boolean turidagi malumot kiriting:')

confirm('Hamma kiritgan malumotlariz togriligiga ishonchingiz komilmi?')

alert(`
Siz kiritgan ${text} sozi ${typeof(text)} turida yozilgan
Siz kiritgan ${num} sozi ${typeof(num)} turida yozilgan
Siz kiritgan ${boolean} sozi ${typeof(boolean==boolean)} turida yozilgan`
)