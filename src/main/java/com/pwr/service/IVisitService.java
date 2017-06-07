package com.pwr.service;

import com.pwr.model.VisitTO;

import java.util.List;

public interface IVisitService {

    public List<VisitTO> findAllVisits();

    public void registerVisit(VisitTO visit);
}
