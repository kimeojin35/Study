class Cal:
    def __init__(self, i1, i2):
        self.i1 = i1
        self.i2 = i2

    def set(self, i1, i2):
        self.i1 = i1
        self.i2 = i2

    def add(self):
        return self.i1 + self.i2

    def sub(self):
        return self.i1 - self.i2

    def mul(self):
        return self.i1 * self.i2

    def mok(self):
        return self.i1 // self.i2

    def mod(self):
        return self.i1 % self.i2

    def pow(self):
        return self.i1**self.i2


c = Cal(255, 65)

print(
    f"add = {c.add()}\n"
    f"sub = {c.sub()}\n"
    f"mul = {c.mul()}\n"
    f"mok = {c.mok()}\n"
    f"mod = {c.mod()}\n"
    f"pow = {c.pow()}\n"
)

c.set(65, 255)
print(f"\n")
print(
    f"add = {c.add()}\n"
    f"sub = {c.sub()}\n"
    f"mul = {c.mul()}\n"
    f"mok = {c.mok()}\n"
    f"mod = {c.mod()}\n"
    f"pow = {c.pow()}\n"
)
