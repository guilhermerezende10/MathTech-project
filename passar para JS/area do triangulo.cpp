#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float base, altura, area;
cout << "Entre com a base do triangulo: "; cin >> base;
cout << "Entre com a altura do triangulo: "; cin >> altura;
area = (base * altura)/2;
cout << "A area do triangulo e:" << area << endl;
system("pause");
}