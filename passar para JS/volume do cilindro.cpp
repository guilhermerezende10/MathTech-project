#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float raio, altura, volume;
cout << "Entre com o raio do cilindro: "; cin >> raio;
cout << "Entre com a altura do cilidro: "; cin >> altura;
volume = 3.14 * raio * raio * altura;
cout << "O volume do cilindro e: " << volume << endl;
system("pause");
}