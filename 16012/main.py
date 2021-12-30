from random import randint
 
def get_poems(path='/Users/Igor/Desktop/poems_py/poems.txt'):
    p = open(path, 'r')
    return p.read().split('\n[BREAK]\n\n')

def format_poems(p):
    poems = []
    for poem in p:
        splited = poem.split('\n\n')
        (title, date) = splited[0].split('\n')
        text = splited[1]
        for l in splited[2:]:
            text += '\n\n' + l
        poems.append((title, text, date))
    return poems

def poemf(p, n):
    if n < len(p):
        return p[n]
        '''return (poem[0].upper() + '\n\n' + poem[1] + '\n' + '(' + poem[2] + ')' + '\n')'''

def poem():
    poem = (poemf(format_poems(get_poems())))
    data = {'title': poem[0], 'text': poem[1], 'date': poem[2]}
    return data