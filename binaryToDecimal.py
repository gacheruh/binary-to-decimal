def binaryToDecimal(binary):
    decimal = 0
    power = len(binary) - 1
    for digit in binary:
        decimal += int(digit) * 2**power
        power -= 1
    return decimal

print(binaryToDecimal("1010")) # Output: 10
