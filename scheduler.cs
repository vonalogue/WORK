int nDoctors  = Convert.ToInt32(Console.ReadLine());
int nPatients = Convert.ToInt32(Console.ReadLine());

int[] result = new int[nDoctors];
int[] pHours = new int[nPatients];
int hoursLeft = 0;

// Build array of patient hours with user input (by line); get running sum of hours (via hoursLeft)
for (int x=0; x < nPatients; x++) {
    pHours[x] = Convert.ToInt32(Console.ReadLine());
    hoursLeft += pHours[x];
}

// Find greatest number of hours; add it to result array (before all else); print it
int maxHours = pHours.Max();
hoursLeft   -= maxHours;
result[0]    = maxHours;

Console.Write(maxHours);
Console.Write(' '); 

// Set up variables for result array loop
int idx = 1;                        // current index to add number at in result array (already added highest number of hours at 0)
int current;                        // current result we're adding  
int docsLeft = nDoctors-1;

// Build and print result array
while (docsLeft > 0) {
    current = hoursLeft/docsLeft;
    result[idx] = current;
    hoursLeft  -= current;
    
    Console.Write(current);
    Console.Write(' ');
    
    idx++;
    docsLeft--;
}                                                                                                                                                           