#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float raio, altura, volume;
cout << "Entre com o raio da base do cone: "; cin >> raio;
cout << "Entre com a altura do cone: "; cin >> altura;
volume = (3.1 * raio * raio * altura)/3;
cout << "O volume do cone e: " << volume << endl;
system("pause");
}