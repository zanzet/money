import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useAuth } from '../../context/AuthContext';

export const Graphs = () => {
    const { user } = useAuth();
    const aggregatedData = Object.values(
        user.transactions.reduce((acc, transaction) => {
            const category = transaction.category;
            if (!acc[category]) {
                acc[category] = { category, income: 0, expense: 0 };
            }
            if (transaction.type === "income") {
                acc[category].income += transaction.amount;
            } else {
                acc[category].expense += Math.abs(transaction.amount);
            }
            return acc;
        }, {})
    );

    return (
        <BarChart
            width={600}
            height={400}
            data={aggregatedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#82ca9d" name="Доходы" />
            <Bar dataKey="expense" fill="#8884d8" name="Расходы" />
        </BarChart>
    );
};

