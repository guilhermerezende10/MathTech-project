#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float tb, hp, hb, lado, abt, abq, abp, abh, vt, vq, vp, vh, triangular, quadrada, pentagonal, hexagonal, volume; 
cout << "Entre com o tipo de base da piramide: 01, 02, 03 ou 04(triangular, quadrada, pentagonal ou hexagonal): "; cin >> tb;
cout << "Entre com a altura da piramide: "; cin >> hp;
cout << "Entre com a altura da base(se for triangular, se nao, digite 0): "; cin >> hb;
cout << "Entre com o valor de um dos lados da base: "; cin >> lado;
triangular = 01;
quadrada = 02;
pentagonal = 03;
hexagonal = 04;
abt = lado * hb;
abq = lado * lado;
abp = 1.72 * lado * lado;
abh = 3*lado*lado*sqrt(3)/2;
vt = (abt * hp) / 3;
vq = (abq * hp) / 3;
vp = (abp * hp) / 3; 
vh = (abh * hp) / 3;
	if(tb == triangular )
	{
	cout << "O volume da piramide de base triangular e: " << vt << endl;
	}
	if(tb == quadrada)
	{
	cout << "O volume da piramide de base quadrada e: " << vq << endl;
	}
	if(tb == pentagonal)
	{
	cout << "O volume da piramide de base pentagonal e: " << vp << endl;
	}
	if(tb == hexagonal)
	{
	cout << "O volume da piramide de base hexagonal e: " << vh << endl;
	}
	else{
	cout << endl;
	}
system("pause");
}