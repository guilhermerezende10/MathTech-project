#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float a, b, c, volume;
cout << "Entre com o comprimento A do paralelepipedo: "; cin >> a;
cout << "Entre com o largura B do paralelepipedo: "; cin >> b;
cout << "Entre com o altura C do paralelepipedo: "; cin >> c;
volume = a * b * c;
cout << "O volume do paralelepipedo e: " << volume << "³" << endl;
system("pause");
}