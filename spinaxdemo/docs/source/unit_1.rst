.. UGC NET Syllabus Documentation

Welcome to the UGC NET Syllabus Documentation. Explore the units below:

1. :ref:`Unit 1: Discrete Structures and Optimization <unit_1>`
2. :ref:`Unit 2: Computer System Architecture <unit_2>`
3. :ref:`Unit 3: Programming Languages and Computer Graphics <unit_3>`
4. :ref:`Unit 4: Database Management Systems <unit_4>`
5. :ref:`Unit 5: System Software and Operating System <unit_5>`
6. :ref:`Unit 6: Software Engineering <unit_6>`
7. :ref:`Unit 7: Data Structures and Algorithms <unit_7>`
8. :ref:`Unit 8: Theory of Computation and Compilers <unit_8>`
9. :ref:`Unit 9: Data Communication and Computer Networks <unit_9>`
10. :ref:`Unit 10: Artificial Intelligence (AI) <unit_10>`

.. toctree::
   :maxdepth: 2

   unit_1
   unit_2
   unit_3
   unit_4
   unit_5
   unit_6
   unit_7
   unit_8
   unit_9
   unit_10

.. _unit_1:

Unit - 1 : Discrete Structures and Optimization
============================================

Welcome to the documentation for Unit 1.

This is the content of Unit 1.

.. code-block:: cpp

    #include <iostream>
    using namespace std;

    class Node {
    public:
        int data;
        Node *next;

        Node(int data){
            this ->data= data;
            next =NULL;
        }
    };

    int main(){
        Node n1(1);
        Node n2(2);
        n1.next =&n2;
        cout <<n1.data<<" "<<n2.data<<endl;
        return 0;
