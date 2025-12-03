#include<stdio.h>
int main()  {
float a;
float b;
 printf("enter the first number :\n");
 scanf("%f", &a);
 printf("enter the second number :\n");
 scanf("%f", &b);
 
 printf("what would you like to do \n");
 printf("1. addition \n");
 printf("2. subtraction \n ");
 printf("3. multiplication \n");
 printf("4.division \n"); 
int choice ;
scanf("%d", & choice);

if ( choice == 1) {
printf("the addition is : %f\n", a+b);}
else if (choice ==2) {
  printf("the subtraction is : %f\n ", a-b);
}
else if (choice == 3 ) {
  printf("the multiplication is : %f\n", a*b);
}
else if ( choice == 4) {
  printf("the division is : %f\n ", a/b);
}
else {
  printf("invalid choice\n");
}
  return 0;
}