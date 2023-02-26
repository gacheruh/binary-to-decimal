public class binaryToDecimal {
    public static void main(String[] args) {
        String binary = "1010";
        int decimal = 0;
        int power = binary.length() - 1;
        for (char digit : binary.toCharArray()) {
            decimal += Integer.parseInt(String.valueOf(digit)) * (int) Math.pow(2, power);
            power--;
        }
        System.out.println(decimal); // Output: 10
    }
}
