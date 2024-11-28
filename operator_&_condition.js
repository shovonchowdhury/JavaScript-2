let marks=[250,645,300,900,50];

for(let element=0;element<marks.length;element++)
{
    let dis=marks[element]/10;
    marks[element]=marks[element]-dis;
}

for(let i of marks)
{
    console.log(i);
}

console.log(marks.toString());