#include <iostream>
#include <math.h>
using namespace std;
int main()
{
float l, a, area;
cout << "Entre com lado de um pentagono regular: "; cin >> l;
a = l/1.453;
area = 5 * l * a;
cout << "A area do pentagono e: " << area << endl;
system("pause");
}