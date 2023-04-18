#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float aresta, volume;
cout << "Entre com a aresta do cubo: ";
cin >> aresta;
volume = pow(aresta,3);
cout << "O volume do cubo e: " << volume << endl;
system("pause");
}