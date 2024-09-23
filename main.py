import os
import time

time.sleep(2)
os.system('git init')
os.system('git add .')
os.system("git commit -m 'update'")
os.system('git push')

time.sleep(5)