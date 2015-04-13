#include <stdio.h>

int add(char *a, char *b) {

   return atoi(a)+atoi(b);
}

int main (int argc, char * argv[]) {
   if (argc==0) {
      return -1; 
   } else {
      //printf ("The result is :%d\n", add (argv[1], argv[2])); 
      printf ("The result is :%d\n", argv[1]->a); 
   }

   return 0;
}
