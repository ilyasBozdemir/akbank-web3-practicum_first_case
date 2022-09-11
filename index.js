let sayi = 1453, toplam = 0;

while (sayi != 0) {
    toplam = (sayi % 10) + toplam;
    sayi = Math.floor(sayi / 10);

}
if (toplam % 2 == 0)
    console.log("Even");
else
    console.log("Odd");
