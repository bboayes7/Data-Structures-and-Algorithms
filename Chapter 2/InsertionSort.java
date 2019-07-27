public class InsertionSort {

    public static void main(String[] args){
        int[] a = {5,2,4,6,1,3};
        int[] b = {31, 41, 59, 26, 41, 58};

        arrayPrinter(a);
        insertionSortAscending(a);
        insertionSortDescending(a);
        arrayPrinter(b);
        insertionSortAscending(b);
        insertionSortDescending(b);
    }

    public static void arrayPrinter(int[] array){
        for(int i = 0; i < array.length; i++){
            System.out.print(array[i] + "\t");
        }
        System.out.println("\n");
    }

    public static void insertionSortAscending(int[] a){
        int key, i;
        for(int j = 1; j < a.length; j++){
            key = a[j];
            i = j - 1;
            while(i >= 0  && a[i] > key){
                a[i + 1] = a[i];
                i--;
            }
            a[i + 1] = key;
        }
        arrayPrinter(a);
    }

    public static void insertionSortDescending(int[] a){
        int key, i;
        for(int j = 1; j < a.length; j++){
            key = a[j];
            i = j - 1;
            while(i >= 0 && a[i] < key){
                a[i+1] = a[i];
                i--;
            }
            a[i+1] = key;
        }
        
        arrayPrinter(a);
    }

}