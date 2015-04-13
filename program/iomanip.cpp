#include <iomanip>
#include <iostream>
#include <sstream>

using namespace std;

int main (void) {
   stringstream test;


   test << setfill('0') << setw(5) << 26;
   cout << test.str();


   return 0;
}
