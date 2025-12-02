#include<stdio.h>
int main ()  {
    int n, count = 0;
printf("Enter your number ");
scanf("%d",&n);
for (int i = 2;i<=n/2;i++) {
    if(n%i==0) {
 count++;
 break;}
    
    if (count==0 && n!=1) {
       count ++; }}
printf("%d ",count);
    return 0;                
}                                                                                                                                                      