def fact_iter(n):
    total,k = 1,1,
    while k<=n:
        total,k = total*k, k+1
    return total

def fact(n):
    if n==0:
        return 1
    return n*fact(n-1) #Assume this is just an abstraction of fact
