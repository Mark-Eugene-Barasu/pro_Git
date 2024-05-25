""" tricky sum question from ticktock """

def tricky_sum(n):
    """ code comes here """
    if n == 0:
        return 0
    elif n % 2 == 0:
        return tricky_sum(n - 1)
    else:
        return n + tricky_sum(n -2)

print(tricky_sum(5)) """ This turns out to be an infinite loop """



