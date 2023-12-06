dats = """
park 800905-1045678
kim 700905-4059823
"""

# print("문자열 조작에 의하여 변환")
# result = []
# for dat in dats.split("\n"):
#     conv = []
#     for a in dat.split():
#         if len(a) == 14 and a[:6].isdigit() and a[7:].isdigit():
#             a = a[:8] + "$" * 6
#         conv.append(a)
#     result.append("".join(conv))
# print("\n".join(result))

import re

print("정규화 식에 의하여")
pat = re.compile(r"(\d[6])([-][1-4])\d{6}")
print(pat.sub("\g<1>\g<2>" + "*" * 10, dats))
