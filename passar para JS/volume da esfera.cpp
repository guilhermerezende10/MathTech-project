#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float raio, volume;
cout << "Entre com o raio da esfera: ";
cin >> raio;
volume = (4 * 3.14 * raio * raio * raio)/3;
cout << "O volume da esfera e: " << volume << endl;
system("pause");
}