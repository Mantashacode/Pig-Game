class Solutiontest2{
    static boolean isPalindrome(String s) {
        int i=0,j=s.length()-1;
        char ch1,ch2;
      while(i<j)
        {  
           ch1=s.charAt(i);
           ch2=s.charAt(j);
         if((ch1>=97 && ch1<=122 || ch1>=65 && ch1<=90 || ch1>=48 && ch1<=57) &&
             (ch2>=97 && ch2<=122 || ch2>=65 && ch2<=90 || ch2>=48 && ch2<=57) ) 
            {  
             if(!(Character.toLowerCase(ch1) == Character.toLowerCase(ch2)))
               return false;
             else
               { i++;
               j--;
              }
            }
            else if(!(ch1>=97 && ch1<=122 || ch1>=65 && ch1<=90 || ch1>=48 && ch1<=57))
                i++;
          else if (!(ch2>=97 && ch2<=122 || ch2>=65 && ch2<=90 || ch2>=48 && ch2<=57))
              j--;
                
             
        }
        return true;
    }
    public static void main(String[] args) {
        String s="0P";
        System.out.print(isPalindrome(s));
    }
}