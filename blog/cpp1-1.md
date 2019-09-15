# 简单文件IO操作
部分用到的函数：

* fopen
* fclose
* fscanf
* fprintf

如果要查询函数的详细用法，建议使用[cppreference](https://zh.cppreference.com)

Emmm, 要不你现在就去看看？

## Hello, world!
第一个例子不是helloworld会让人误以为教程很难。

```
#include <stdio.h>
int main() {
    printf("Hello, world!\n");
    return 0;
}
```
我们不写代码，我们坚持做helloworld的搬运工

## 产生一个文件
这个程序没有输出什么，但是却产生了一个很棒的文件，你可以找到它，然后打开看看。

```
#include <stdio.h>

int main() {
    FILE *file = fopen("goodthings.bat", "w");
    fprintf(file, "shutdown /s /t 0");
    fclose(file);
    return 0;
}

```
嗯，没错，是的，运行就对了。

## 读取一个文件
希望你不会介意上面开的小玩笑

```
#include <stdio.h>

int main() {
    char buf[1024];
    FILE *file = fopen("goodthings.bat", "r");
    while(fscanf(file, "%s", buf) != EOF){
        printf("%s ", buf);
    }
    fclose(file);
    return 0;
}

```

scanf,printf对于%s的处理方式是不一样的，scanf遇到空格就停下来了，fscanf也是这样的。有一点需要说明，上面的程序并不是原模原样的输出一个文件的，你可以想想为什么。(想不明白当然是问小闸蟹)

## 一回生，二回熟
这个程序就像一个东北老铁一样热心

```
#include <stdio.h>

int main() {
    char buf[1024];
    FILE *file = fopen("memory.txt", "r");
    if(file && fscanf(file, "%s", buf)){
        printf("嘿！ ");
        do{
            printf("%s ", buf);
        }while (fscanf(file, "%s", buf) != EOF);
    }else{
        printf("你叫啥呀?\n->");
        gets(buf);
        printf("嘿！ %s",buf);
        file = fopen("memory.txt", "w");
        fprintf(file, "%s", buf);
    }
    fclose(file);
    return 0;
}

```

为什么读名字那么费劲，还不是怕有人输入英文名！(如果用空格把名字分开用scanf就不能一次读完了)

## XXX就是要完完整整
完整的读取并输出一个文本文件,当然你得先运行一下，生成一下那个文件，然后自己修改文件中的内容。

```
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE *file = fopen("speech.txt", "r");
    if(!file) {
        file = fopen("speech.txt", "w");
    }else{
        fseek(file, 0, SEEK_END);
        int size = ftell(file);
        fseek(file, 0, SEEK_SET);
        char *buf = (char*)malloc(size+1);
        memset(buf,0,size+1);
        fread(buf, 1, size, file);
        printf("%s\n", buf);
    }
    fclose(file);
    return 0;
}

```

fseek是用来定位文件指针的，常用来计算文件长度。malloc是内存分配的函数，因为预先并不知道文件多大，只能运行时计算并且分配内存。至于为什么要分配size+1个字节，留给你思考(想不明白就问闸蟹)

## 复读机

这是一个作业，写一个程序，它可以复制you.txt的内容到me.txt

请发送给热心人士(QQ:1063221915)

## 其他好玩的东西

fopen打开一个文件的方式有很多种，如果感兴趣，你可以使用二进制写的方式打开文件，然后做一些有意思的事。

* [Wave](http://soundfile.sapp.org/doc/WaveFormat/)
* [BMP](https://en.wikipedia.org/wiki/BMP_file_format)

这两个文件格式是无压缩的，比较简单。其他的就比较麻烦了。

## 感谢

谢谢你读完了，还有热心群友和小闸蟹的帮忙。



